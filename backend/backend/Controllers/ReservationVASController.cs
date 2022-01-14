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
    public class ReservationVASController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public ReservationVASController(BackEndDBConext context)
        {
            _context = context;
        }

        // GET: api/ReservationVAS
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservationVAS>>> GetReservationVAs()
        {
            return await _context.ReservationVAs.ToListAsync();
        }

        // GET: api/ReservationVAS/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReservationVAS>> GetReservationVAS(int id)
        {
            var reservationVAS = await _context.ReservationVAs.FindAsync(id);

            if (reservationVAS == null)
            {
                return NotFound();
            }

            return reservationVAS;
        }

        // PUT: api/ReservationVAS/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservationVAS(int id, ReservationVAS reservationVAS)
        {
            if (id != reservationVAS.ResVASId)
            {
                return BadRequest();
            }

            _context.Entry(reservationVAS).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationVASExists(id))
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

        // POST: api/ReservationVAS
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservationVAS>> PostReservationVAS(ReservationVAS reservationVAS)
        {
            _context.ReservationVAs.Add(reservationVAS);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservationVAS", new { id = reservationVAS.ResVASId }, reservationVAS);
        }

        // DELETE: api/ReservationVAS/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservationVAS(int id)
        {
            var reservationVAS = await _context.ReservationVAs.FindAsync(id);
            if (reservationVAS == null)
            {
                return NotFound();
            }

            _context.ReservationVAs.Remove(reservationVAS);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationVASExists(int id)
        {
            return _context.ReservationVAs.Any(e => e.ResVASId == id);
        }
    }
}
