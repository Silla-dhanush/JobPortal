import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        mailId: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            // Store JWT token
            localStorage.setItem("token", data.token);

            // Store user information
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            alert("Login successful!");

            navigate("/");

        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="login-page flex flex-col h-screen border-gray-300 shadow-md rounded-lg gap-4 p-4 w-1/3 mx-auto h-full">

            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900">
                    Join JobSphere
                </h1>

                <p className="text-gray-600">
                    Start your professional journey today
                </p>
            </div>

            <form
                onSubmit={handleLogin}
                className="flex justify-center items-center login-form grid grid-cols-1 gap-4 w-3/4"
            >

                {/* Email */}
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                    >
                        Email Address
                    </label>

                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="password"
                    >
                        Password
                    </label>

                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Submit */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Sign In
                    </button>
                </div>

                {/* Register */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a
                            href="/register"
                            className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                            Register
                        </a>
                    </p>
                </div>

            </form>
        </div>
    );
}