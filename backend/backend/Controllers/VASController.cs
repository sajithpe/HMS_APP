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
    public class VASController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public VASController(BackEndDBConext context)
        {
            _context = context;
        }

        // GET: api/VAS
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VAS>>> GetVASs()
        {
            return await _context.VASs.ToListAsync();
        }

        // GET: api/VAS/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VAS>> GetVAS(int id)
        {
            var vAS = await _context.VASs.FindAsync(id);

            if (vAS == null)
            {
                return NotFound();
            }

            return vAS;
        }

        // PUT: api/VAS/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVAS(int id, VAS vAS)
        {
            if (id != vAS.VasId)
            {
                return BadRequest();
            }

            _context.Entry(vAS).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VASExists(id))
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

        // POST: api/VAS
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VAS>> PostVAS(VAS vAS)
        {
            _context.VASs.Add(vAS);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVAS", new { id = vAS.VasId }, vAS);
        }

        // DELETE: api/VAS/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVAS(int id)
        {
            var vAS = await _context.VASs.FindAsync(id);
            if (vAS == null)
            {
                return NotFound();
            }

            _context.VASs.Remove(vAS);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VASExists(int id)
        {
            return _context.VASs.Any(e => e.VasId == id);
        }
    }
}
