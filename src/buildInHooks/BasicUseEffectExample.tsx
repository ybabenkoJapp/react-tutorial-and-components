import * as React from "react";
import { useEffect, useState } from "react";

export default function BasicUseEffectExample({ userId }) {
  const [user, setUser] = useState<{
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    return () => {};
  }, [userId]);

  return (
    <>
      {loading ? (
        <p>Завантаження ...</p>
      ) : (
        <div>
          <p>User</p>
          {user && (
            <>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
