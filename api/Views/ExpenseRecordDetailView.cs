﻿using api.Models;

namespace api.Views
{
    public class ExpenseRecordDetailView
    {
        public ExpenseRecordDetailView(ExpenseRecord expenseRecord)
        {
            Description = expenseRecord.Description;
            Amount = expenseRecord.Amount;
            DateRecorded = expenseRecord.DateRecorded;
            OrderId = expenseRecord.OrderId;
        }

        public string Description { get; set; }
        public float Amount { get; set; }
        public DateTime DateRecorded { get; set; }
        public int OrderId { get; set; }
    }
}
