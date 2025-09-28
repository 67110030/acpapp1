import React from 'react';
import styles from '../styles/dashboard.module.css';

const dashboardData = [
  { date: 'Jun 10, 2025', time: '9:41 AM', choice: '1-Bedroom Condo (Bangkok)', type: 'Real Estate', amount: 2800000, unit: 'Unit' },
  { date: 'Jun 12, 2025', time: '8:43 AM', choice: 'Brent Crude Oil', type: 'Commodities', amount: 2700, unit: 'Barrel' },
  { date: 'Jun 14, 2025', time: '7:50 AM', choice: 'AOT Stock', type: 'Stocks', amount: 70, unit: 'Share' },
  { date: 'Jun 18, 2025', time: '9:55 AM', choice: 'PTT Stock', type: 'Stocks', amount: 42, unit: 'Share' },
  { date: 'Jun 20, 2025', time: '7:15 AM', choice: '24K Gold', type: 'Commodities', amount: 2050, unit: 'Gram' },
  { date: 'Jun 22, 2025', time: '6:45 AM', choice: '3-Bedroom House (Chiang Mai)', type: 'Real Estate', amount: 5200000, unit: 'Unit' },
  { date: 'Jun 25, 2025', time: '5:50 AM', choice: '3-month Thai Government Bond', type: 'Cash Equivalents', amount: 1050, unit: 'Bond' },
];

export default function DashboardNew() {
  return (
    <div className={styles.dashboardNew}>
      <header className={styles.dashboardHeader}>
        <div className={styles.logoLeft}>Logo</div>
        <nav>
          <span>Dashboard</span>
          <span>Manage</span>
        </nav>
        <div className={styles.logoRight}>Logo</div>
      </header>

      <main className={styles.dashboardMain}>
        <h1>Investment Analysis Calculations</h1>
        <div className={styles.dashboardGrid}>
          {dashboardData.map((item, idx) => (
            <div key={idx} className={styles.dashboardCard}>
              <div className={styles.datetime}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.time}>{item.time}</span>
              </div>
              <div className={styles.fieldGroup}>
                <label>Financial Choice:</label>
                <input type="text" value={item.choice} />
              </div>
              <div className={styles.fieldGroup}>
                <label>Type:</label>
                <select value={item.type}>
                  <option>Real Estate</option>
                  <option>Commodities</option>
                  <option>Stocks</option>
                  <option>Cash Equivalents</option>
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label>Amount (Baht):</label>
                <input type="number" value={item.amount} />
              </div>
              <div className={styles.fieldGroup}>
                <label>Per (Unit):</label>
                <input type="text" value={item.unit} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.dashboardFooter}>
        @ 2025 M.A.C.B., Inc. All Rights Reserved.
      </footer>
    </div>
  );
}