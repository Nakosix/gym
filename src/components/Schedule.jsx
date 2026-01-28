export default function Schedule() {
  return (
    <section className="section">
      <h2>Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Morning</th>
            <th>Evening</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Yoga</td>
            <td>HIIT</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>CrossFit</td>
            <td>Boxing</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Cardio</td>
            <td>Open Gym</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
