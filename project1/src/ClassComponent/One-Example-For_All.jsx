import React from "react";

export class UsersTable extends React.Component {
  state = {
    users: [],
    loading: false,
    error: null,
  };

  fetchUsers = () => {
    this.setState({ loading: true, error: null });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  };

  componentDidMount() {
    console.log("Component did mount!");
    this.fetchUsers();
  }

  componentDidUpdate() {
    // For demo, log when the component updates
    console.log("Component did update!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
    // Cleanups if needed (e.g., clear timers or subscriptions)
  }

  render() {
    const { users, loading, error } = this.state;

    return (
      <div>
        <h2>Users Table</h2>
        <button onClick={this.fetchUsers} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>

        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        <table border="1" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
            {!loading && users.length === 0 && (
              <tr>
                <td colSpan="3">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
