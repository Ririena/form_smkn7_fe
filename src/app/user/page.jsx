'use client'
import React, { useState, useEffect } from 'react';
import { BASE_URL_API } from '@/constant/BASE_URL_API';
const SessionComponent = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL_API}/api/v1/session`); 
        if (!response.ok) {
          throw new Error('Failed to fetch session');
        }
        const result = await response.json();
        setSession(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Session Data</h1>
      {session ? (
        <pre>{JSON.stringify(session, null, 2)}</pre>
      ) : (
        <p>No session data available.</p>
      )}
    </div>
  );
};

export default SessionComponent;
