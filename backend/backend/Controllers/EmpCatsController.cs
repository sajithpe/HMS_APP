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
    public class EmpCatsController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public EmpCatsController(BackEndDBConext context)
        {
            _context = context;
        }

        // GET: api/EmpCats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpCat>>> GetEmpCats()
        {
            return await _context.EmpCats.ToListAsync();
        }

        // GET: api/EmpCats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmpCat>> GetEmpCat(int id)
        {
            var empCat = await _context.EmpCats.FindAsync(id);

            if (empCat == null)
            {
                return NotFound();
            }

            return empCat;
        }

        // PUT: api/EmpCats/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpCat(int id, EmpCat empCat)
        {
            if (id != empCat.EmpCatId)
            {
                return BadRequest();
            }

            _context.Entry(empCat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpCatExists(id))
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

        // POST: api/EmpCats
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmpCat>> PostEmpCat(EmpCat empCat)
        {
            _context.EmpCats.Add(empCat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmpCat", new { id = empCat.EmpCatId }, empCat);
        }

        // DELETE: api/EmpCats/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpCat(int id)
        {
            var empCat = await _context.EmpCats.FindAsync(id);
            if (empCat == null)
            {
                return NotFound();
            }

            _context.EmpCats.Remove(empCat);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmpCatExists(int id)
        {
            return _context.EmpCats.Any(e => e.EmpCatId == id);
        }
    }
}
