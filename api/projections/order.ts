import { makeCustomerView } from "./customer"
import { makeVehicleView } from "./vehicle"

export const makeOrderView = (document) => {
    if (document == null)
        return {};
    
    return {
        id: document._id,
        status: document.status,
        timeIn: document.timeIn,
        timeOut: document.timeOut,
        customer: makeCustomerView(document.customer),
        type: document.type,
        company: document.company,
        vehicle: makeVehicleView(document.vehicle),
        invoice: makeInvoiceView(document.invoice),
        estimateNumber: document.estimateNumber,
        scopeOfWork: document.scopeOfWork,
        expenses: document.expenses.map((value) => {
            return makeExpenseView(value)
        }),
        verified: document.verified
    }
}

export const makeOrderArrayView = (documents) => {
    return documents.map((val) => {
        return makeOrderView(val)
    })
}

const makeInvoiceView = (invoice) => {
    return {
        id: invoice.id,
        amount : invoice.amount,
        deductible : invoice.deductible, 
        agentFirstName : invoice.agentFirstName,
        agentLastName : invoice.agentLastName,
        datePaid : invoice.datePaid,
        agentComission : invoice.agentComission
    }
}

const makeExpenseView = (expense) => {
    return {
        dateRecorded: expense.Date,
        description: expense.description,
        amount: expense.amount,
    }
}

