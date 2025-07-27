import { useLocation } from 'react-router-dom';

function Adminlogin() {
  const location = useLocation();
  const users = location.state?.users || [];

  return (
 <div className="border-2 border-black rounded-md mx-auto mt-10 w-[700px] ml-[300px] p-4">
  <h2 className="text-xl font-semibold text-center mb-4">Admin Login Page</h2>

  <ul className="space-y-2">
    {users.map((user) => (
      <li
        key={user._id}
        className="border border-black rounded px-3 py-2"
      >
        {user.name} - {user.email}
      </li>
    ))}
  </ul>
</div>

  );
}
export default Adminlogin;