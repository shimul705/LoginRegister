
	
const Login = () => {
   return (
      <div className="h-screen grid items-center shimul bg-cover  ">
         <div className="flex flex-col gap-4 items-center m-auto w-1/4">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold text-white">Login now!</h1>
            </div>
            <div className="shadow-2xl w-full p-6 rounded-xl bg-base-100 opacity-80">
               <form>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                     <div >
								<span>Don't have an account?</span>
								<span className="link ml-4 link-secondary font-bold">Register</span>
							</div>
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;