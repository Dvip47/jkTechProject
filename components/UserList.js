export default function UserList({ users }) {
    if (!users || users.length === 0) {
      return <p>No users found.</p>
    }
  
    return (
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{u.username}</td>
              <td className="p-2 border">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  