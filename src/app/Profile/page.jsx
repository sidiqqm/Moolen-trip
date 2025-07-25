"use client";

import { use, useContext, useEffect, useState } from "react";
import { Camera, Edit, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import apiRequest from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";
import Loading from "../loading";
import ProtectedRoute from "@/components/ProtectedLayout";

// Mock user data - in a real app, you would fetch this from your API
const userData = {
  id: "user123",
  username: "johndoe",
  email: "john.doe@example.com",
  avatar:
    "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  joinedDate: "January 2023",
  posts: [
    {
      id: "1",
      title: "Modern Apartment in Downtown",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      address: "123 Main St, New York, NY",
      price: 1200,
      date: "2023-10-15",
    },
    {
      id: "2",
      title: "Modern Apartment in Downtown",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      address: "123 Main St, New York, NY",
      price: 1200,
      date: "2023-10-15",
    },
    {
      id: "3",
      title: "Modern Apartment in Downtown",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      address: "123 Main St, New York, NY",
      price: 1200,
      date: "2023-10-15",
    },
    {
      id: "4",
      title: "Cozy Studio Near Central Park",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      address: "456 Park Ave, New York, NY",
      price: 850,
      date: "2023-09-22",
    },
  ],
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(userData);
  const [newAvatar, setNewAvatar] = useState(null);
  const router = useRouter();
  const { currentUser, updateUser, loading } = useContext(AuthContext);
  const [error, setError] = useState();

  useEffect(() => {
    if (!loading && !currentUser) {
      router.replace("/login");
    }
  }, [loading, currentUser]);

  if (loading || !currentUser) {
    return <Loading />;
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");

      localStorage.removeItem("user");

      updateUser(null);

      router.push("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`user/${currentUser.id}`, {
        username,
        email,
        password,
      });
      updateUser(res.data);
      router.push("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8">
          {/* Avatar Section */}
          <div className="relative group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200 relative">
              <Image
                src={
                  currentUser.avatar ||
                  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={currentUser.username}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <Camera className="w-6 h-6 text-white" />
              </label>
            </div>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold">
                {currentUser.username}
              </h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>

            <p className="text-gray-600 mb-2">{currentUser.email}</p>
            <p className="text-gray-500 text-sm">
              Joined {currentUser.createdAt}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="/create-post"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Create New Post</span>
              </Link>
              <button
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Edit Profile Form (Conditional) */}
        {isEditing && (
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <form className="space-y-4" onSubmit={handleUpdate}>
              <div>
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  defaultValue={currentUser.username}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name=""
                  defaultValue={currentUser.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* My Posts Section */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-6">My Listings</h2>

          {user.posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                You haven't posted any listings yet
              </p>
              <Link
                href="/create-post"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Create Your First Post</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.posts.map((post) => (
                <div
                  key={post.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link href={`/detail/${post.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {post.address}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-orange-500">
                          ${post.price}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
