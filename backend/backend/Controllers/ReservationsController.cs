using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public ReservationsController(BackEndDBConext context)
        {
            _context = context;
        }


        // PUTCheckout: api/Reservations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("chkout/{id}")]
        public async Task<IActionResult> PutCheckout(int id, Reservation reservation)
        {


            var r = _context.Reservations.Single(x => x.ResId == id);
            r.ResStatus = "O";

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // PUTCheckin: api/Reservations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("chkin/{id}")]
        public async Task<IActionResult> PutCheckin(int id, Reservation reservation)
        {
         

            var r = _context.Reservations.Single(x => x.ResId == id);
            r.ResStatus = "I";

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }




        // GETAvailable: api/Reservations/avlble
        [HttpGet("avlble")]
        public async Task<ActionResult<IEnumerable<Room>>> GetFilteredCustInquiries(DateTime dt1, DateTime dt2, int hd)
        {
            
            var rooms = (from rms in _context.Rooms
                         where rms.HotelId == hd
                         select rms.RoomId).ToList();

            var bookings = (from bkngs in _context.Reservations
                            where bkngs.HotelId == hd && bkngs.ResCheckIn <= dt1
                                  && dt1 <= bkngs.ResCheckOut
                                  select bkngs.RoomId)
                                 .ToList();

            var avble = rooms.Except(bookings);

            return await _context.Rooms
                .Where(r => avble.Contains(r.RoomId)).ToListAsync();
                           

        }

        // GET: api/Reservations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
        {
            return await _context.Reservations
                .Include(x=>x.Customer)
                .Include(x=>x.Room)
                .ToListAsync();
        }

        // GET: api/Reservations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {
            var reservation = await _context.Reservations
                .FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            return reservation;
        }

        // PUT: api/Reservations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservation(int id, Reservation reservation)
        {
            if (id != reservation.ResId)
            {
                return BadRequest();
            }

            _context.Entry(reservation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reservations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reservation>> PostReservation(Reservation reservation)
        {
            _context.Reservations.Add(reservation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservation", new { id = reservation.ResId }, reservation);
        }

        // DELETE: api/Reservations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            _context.Reservations.Remove(reservation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationExists(int id)
        {
            return _context.Reservations.Any(e => e.ResId == id);
        }
    }
}
