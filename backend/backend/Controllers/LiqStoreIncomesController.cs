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
    public class LiqStoreIncomesController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public LiqStoreIncomesController(BackEndDBConext context)
        {
            _context = context;
        }

        // GET: api/LiqStoreIncomes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LiqStoreIncome>>> GetLiqStoreIncomes()
        {
            return await _context.LiqStoreIncomes.ToListAsync();
        }

        // GET: api/LiqStoreIncomes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LiqStoreIncome>> GetLiqStoreIncome(int id)
        {
            var liqStoreIncome = await _context.LiqStoreIncomes.FindAsync(id);

            if (liqStoreIncome == null)
            {
                return NotFound();
            }

            return liqStoreIncome;
        }

        // PUT: api/LiqStoreIncomes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLiqStoreIncome(int id, LiqStoreIncome liqStoreIncome)
        {
            if (id != liqStoreIncome.IncomeId)
            {
                return BadRequest();
            }

            _context.Entry(liqStoreIncome).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LiqStoreIncomeExists(id))
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

        // POST: api/LiqStoreIncomes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LiqStoreIncome>> PostLiqStoreIncome(LiqStoreIncome liqStoreIncome)
        {
            _context.LiqStoreIncomes.Add(liqStoreIncome);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLiqStoreIncome", new { id = liqStoreIncome.IncomeId }, liqStoreIncome);
        }

        // DELETE: api/LiqStoreIncomes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLiqStoreIncome(int id)
        {
            var liqStoreIncome = await _context.LiqStoreIncomes.FindAsync(id);
            if (liqStoreIncome == null)
            {
                return NotFound();
            }

            _context.LiqStoreIncomes.Remove(liqStoreIncome);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LiqStoreIncomeExists(int id)
        {
            return _context.LiqStoreIncomes.Any(e => e.IncomeId == id);
        }
    }
}
