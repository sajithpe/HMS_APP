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
    public class LiqStoreExpensesController : ControllerBase
    {
        private readonly BackEndDBConext _context;

        public LiqStoreExpensesController(BackEndDBConext context)
        {
            _context = context;
        }

        // GET: api/LiqStoreExpenses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LiqStoreExpense>>> GetLiqStoreExpenses()
        {
            return await _context.LiqStoreExpenses.ToListAsync();
        }

        // GET: api/LiqStoreExpenses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LiqStoreExpense>> GetLiqStoreExpense(int id)
        {
            var liqStoreExpense = await _context.LiqStoreExpenses.FindAsync(id);

            if (liqStoreExpense == null)
            {
                return NotFound();
            }

            return liqStoreExpense;
        }

        // PUT: api/LiqStoreExpenses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLiqStoreExpense(int id, LiqStoreExpense liqStoreExpense)
        {
            if (id != liqStoreExpense.LiqExId)
            {
                return BadRequest();
            }

            _context.Entry(liqStoreExpense).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LiqStoreExpenseExists(id))
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

        // POST: api/LiqStoreExpenses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LiqStoreExpense>> PostLiqStoreExpense(LiqStoreExpense liqStoreExpense)
        {
            _context.LiqStoreExpenses.Add(liqStoreExpense);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLiqStoreExpense", new { id = liqStoreExpense.LiqExId }, liqStoreExpense);
        }

        // DELETE: api/LiqStoreExpenses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLiqStoreExpense(int id)
        {
            var liqStoreExpense = await _context.LiqStoreExpenses.FindAsync(id);
            if (liqStoreExpense == null)
            {
                return NotFound();
            }

            _context.LiqStoreExpenses.Remove(liqStoreExpense);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LiqStoreExpenseExists(int id)
        {
            return _context.LiqStoreExpenses.Any(e => e.LiqExId == id);
        }
    }
}
