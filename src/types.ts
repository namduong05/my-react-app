// Mô hình User trả về từ GitHub API
export interface GithubUser {
  login: string; // Username
  avatar_url: string; // Link ảnh đại diện
  name: string; // Tên thật
  bio: string; // Giới thiệu
  public_repos: number; // Số lượng kho code
  followers: number; // Số người theo dõi
  html_url: string; // Link profile gốc
}

export interface UserRepo {
  id: number; //id
  name: string; //  Tên repo
  html_url: string; // Url repo
}

// Mô hình lỗi (nếu không tìm thấy user)
export interface ApiError {
  message: string;
}
