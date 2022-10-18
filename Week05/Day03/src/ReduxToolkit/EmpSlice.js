import { createSlice } from "@reduxjs/toolkit";

const listOfEmployee = [
    { empId: 1, fullname: 'Naufal', salary: 4500 },
    { empId: 2, fullname: 'Firdaus', salary: 5500 },
    { empId: 3, fullname: 'Ahmad', salary: 3500 }
]

export const empSlice = createSlice({
    name: 'cart',
    initialState:{
        employee : [...listOfEmployee],
        totalSalary : listOfEmployee.reduce((sum,el)=> sum + el.salary,0)
    },
    reducers : {
        doGetEmps : state => {
            return state
        },
        doAddEmps: (state, action) =>{
            const { payload } = action
            const final_payload = {...payload, salary: parseInt(payload.salary)}
            const up_employee = [...state.employee,final_payload];
            return {
                ...state,
                employee : up_employee,
                totalSalary : up_employee.reduce((sum,el)=> sum + el.salary,0)
            }
        },
        doChangeSalary: (state, action) =>{
            const { payload } = action;
            const up_employee = state.employee.map(d =>{ 
                if(d.empId === payload.empId) return {
                        ...d,
                        salary: d.salary + payload.num
                    }
                return d
            });
            
            return {
                ...state,
                employee: up_employee,
                totalSalary : up_employee.reduce((sum,el)=> sum + el.salary,0)
            }
        }
    }
})

export const {doAddEmps,doGetEmps,doChangeSalary} = empSlice.actions
export default empSlice.reducer