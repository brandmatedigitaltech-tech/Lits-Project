import { useEffect, useState } from "react";
import "./admin.css"; // ✅ CSS import (important)

function Admin() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Dashboard</h2>

      {/* ✅ UPDATED TABLE */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.phone}</td>
              <td>{s.course || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Admin;