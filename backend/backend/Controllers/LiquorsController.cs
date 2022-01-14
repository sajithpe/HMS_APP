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
    public class LiquorsController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public LiquorsController(BackEndDBConext context)
        {
            _context = context;
        }

        // GET: api/Liquors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Liquor>>> GetLiquors()
        {
            return await _context.Liquors.ToListAsync();
        }

        // GET: api/Liquors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Liquor>> GetLiquor(int id)
        {
            var liquor = await _context.Liquors.FindAsync(id);

            if (liquor == null)
            {
                return NotFound();
            }

            return liquor;
        }

        // PUT: api/Liquors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLiquor(int id, Liquor liquor)
        {
            if (id != liquor.LiqId)
            {
                return BadRequest();
            }

            _context.Entry(liquor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LiquorExists(id))
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

        // POST: api/Liquors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Liquor>> PostLiquor(Liquor liquor)
        {
            _context.Liquors.Add(liquor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLiquor", new { id = liquor.LiqId }, liquor);
        }

        // DELETE: api/Liquors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLiquor(int id)
        {
            var liquor = await _context.Liquors.FindAsync(id);
            if (liquor == null)
            {
                return NotFound();
            }

            _context.Liquors.Remove(liquor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LiquorExists(int id)
        {
            return _context.Liquors.Any(e => e.LiqId == id);
        }
    }
}
