import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";

export default function YogaAdmissionForm() {
  const [formData, setFormData] = useState({ name: "", age: "", batch: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const batches = ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Reset error when the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, batch } = formData;

    // Validate input
    if (!name || !age || !batch) {
      setError("All fields are required.");
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
      setError("Age must be between 18 and 65.");
      return;
    }

    try {
      // Send form data to the backend
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, batch }),
      });

      if (response.ok) {
        setMessage(`✅ Registration successful! Enrolled in ${batch} batch. Monthly fee: ₹500.`);
      } else {
        setError('Error: Could not save data');
      }
    } catch (error) {
      setError('Error: Could not connect to the server');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-4 shadow-lg bg-white rounded-lg">
        <h2 className="text-green-700">Join Flex Yoga</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <Label>Age</Label>
            <Input type="number" name="age" value={formData.age} onChange={handleChange} />
          </div>
          <div>
            <Label>Batch</Label>
            <Select
              options={batches}
              onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
            />
          </div>
          <Button type="submit">Pay ₹500 & Enroll</Button>
        </form>
      </div>
    </div>
  );
}
