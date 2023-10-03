import React from 'react'
import { Link } from 'react-router-dom'

export function SidebarSection() {
  return (
    <>
      <aside className="main-sidebar">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <Link className="active" to="/user/dashboard">
                <i className="fa fa-tachometer"></i><span>Dashboard1212</span>
                <span className="pull-right-container">
                </span>
              </Link>
            </li>
            <li>
              <Link className="active" to="/user/profile">
                <i className="fa fa-user"></i><span>Profile</span>
                <span className="pull-right-container">
                </span>
              </Link>
            </li>
            {/* <li className="treeview">
              <a href="#">
                <i className="fa fa-users"></i><span>Customers</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="add-customer.html">Add Customer</a></li>
                <li><a href="clist.html">List</a></li>
                <li><a href="group.html">Groups</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-shopping-basket"></i><span>Transaction</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="deposit.html">New Deposit</a></li>
                <li><a href="expense.html">New Expense</a></li>
                <li><a href="transfer.html">Transfer</a></li>
                <li><a href="view-tsaction.html">View transaction</a></li>
                <li><a href="balance.html">Balance Sheet</a></li>
                <li><a href="treport.html">Transfer Report</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-shopping-cart"></i><span>Sales</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="invoice.html">Invoices</a></li>
                <li><a href="ninvoices.html">New Invoices</a></li>
                <li><a href="recurring.html">Recurring invoices</a></li>
                <li><a href="nrecurring.html">New Recurring invoices</a></li>
                <li><a href="quote.html">quotes</a></li>
                <li><a href="nquote.html">New quote</a></li>
                <li><a href="payment.html">Payments</a></li>
                <li><a href="taxeport.html">Tax Rates</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-book"></i><span>Task</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="rtask.html">Running Task</a></li>
                <li><a href="atask.html">Archive Task</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-shopping-bag"></i><span>Accounting</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="cpayment.html">Client payment</a></li>
                <li><a href="emanage.html">Expense management</a></li>
                <li><a href="ecategory.html">Expense Category</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-file-text"></i><span>Report</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="preport.html">Project Report</a></li>
                <li><a href="creport.html">Client Report</a></li>
                <li><a href="ereport.html">Expense Report</a></li>
                <li><a href="incomexp.html">Income expense comparesion</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-bell"></i><span>Attendance</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="thistory.html">Time History</a></li>
                <li><a href="timechange.html">Time Change Request</a></li>
                <li><a href="atreport.html">Attendance Report</a></li>
              </ul>
            </li> */}

          </ul>
        </div>
      </aside>
    </>
  )
}