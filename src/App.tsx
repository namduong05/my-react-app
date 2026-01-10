import { useState } from "react";
import { useGithub } from "./hooks/useGithub";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");
  const { user, userRepo, isLoading, error, searchUser } = useGithub();

  const handleSearch = () => {
    if (inputName.trim()) {
      searchUser(inputName);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        GitHub Finder
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Nhập username (vd: facebook, google)..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
        >
          {isLoading ? "Tìm..." : "Search"}
        </button>
      </div>
      {/* Nếu lỗi */}
      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center mb-4">
          ⚠️ {error}
        </div>
      )}

      {/* Tìm thấy User */}
      {user && (
        <div className="flex flex-col items-center animate-fade-in">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
          />
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-500 mb-4">@{user.login}</p>

          {user.bio && (
            <p className="text-center text-gray-700 mb-6 italic">
              "{user.bio}"
            </p>
          )}

          <div className="flex justify-between w-full px-10 mb-6">
            <div className="text-center">
              <span className="block font-bold text-xl">
                {user.public_repos}
              </span>
              <span className="text-sm text-gray-500">Repos</span>
            </div>
            <div className="text-center">
              <span className="block font-bold text-xl">{user.followers}</span>
              <span className="text-sm text-gray-500">Followers</span>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Xem trang cá nhân
          </a>
        </div>
      )}

      {/* Repos của user */}
      {userRepo &&
        userRepo.length > 0 &&
        userRepo.map((repo) => (
          <div
            key={repo.id}
            className="flex justify-between px-2 py-2 mt-2 border border-gray-400 rounded-xl"
          >
            <h2 className="text-xl font-bold">{repo.name}</h2>
            <button className="py-1 px-2 text-white rounded bg-blue-500 hover:bg-blue-400">
              <a href={repo.html_url}>Link sản phẩm</a>
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
