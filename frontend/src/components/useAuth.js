const useAuth = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    return {
      user,
      isLoggedIn: !!user,
      logout: () => localStorage.removeItem("user")
    };
  };
  
  export default useAuth;
  