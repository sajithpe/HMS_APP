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
    public class CustInquiriesController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public CustInquiriesController(BackEndDBConext context)
        {
            _context = context;
        }

        // GETPending: api/CustInquiries/
        [HttpGet("pndg")]
        public async Task<ActionResult<IEnumerable<CustInquiry>>> GetFilteredCustInquiries()
        {
            return await _context.CustInquiries
                .Where(x=>x.InqStatus =="A")
                .Include(c => c.Customer)
                .Include(h => h.Hotel)
                .ToListAsync();
        }


        // GET: api/CustInquiries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustInquiry>>> GetCustInquiries()
        {
            return await _context.CustInquiries
                .Include(x=>x.Customer)
                .Include(x=>x.Hotel)
                .ToListAsync();
        }

        // GET: api/CustInquiries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustInquiry>> GetCustInquiry(int id)
        {
            var custInquiry = await _context.CustInquiries.FindAsync(id);

            if (custInquiry == null)
            {
                return NotFound();
            }

            return custInquiry;
        }

        // PUT: api/CustInquiries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustInquiry(int id, CustInquiry custInquiry)
        {
            if (id != custInquiry.InqId)
            {
                return BadRequest();
            }

            _context.Entry(custInquiry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustInquiryExists(id))
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

        // POST: api/CustInquiries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustInquiry>> PostCustInquiry(CustInquiry custInquiry)
        {
            _context.CustInquiries.Add(custInquiry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustInquiry", new { id = custInquiry.InqId }, custInquiry);
        }

        // DELETE: api/CustInquiries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustInquiry(int id)
        {
            var custInquiry = await _context.CustInquiries.FindAsync(id);
            if (custInquiry == null)
            {
                return NotFound();
            }

            _context.CustInquiries.Remove(custInquiry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustInquiryExists(int id)
        {
            return _context.CustInquiries.Any(e => e.InqId == id);
        }
    }
}
