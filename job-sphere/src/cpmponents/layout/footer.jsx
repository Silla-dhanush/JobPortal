export default function Footer() {
  return (
    <div className="bg-zinc-900 mt-14" >
      <div className="text-slate-400 flex flex-row justify-around p-10 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl font-bold">JobSphere</h1>
          <p>
            Connecting talent to opportunity. Your
            <br /> journey to a dream career starts here.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold">COMPANY</h1>
          <h3>About Us</h3>
          <h3>Careers</h3>
          <h3>Contact</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold">RESOURCES</h1>
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Help Center</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold">SUPPOURT</h1>
          <h3>Contact Support</h3>
          <h3>FAQ</h3>
        </div>
      </div>
      <div>
        <div className="border-t border-gray-600 w-3/4 mx-auto"></div>
      </div>
      <div>
        <p className="text-slate-400 text-sm bg-zinc-900 flex w-3/4 mx-auto p-8">© 2024 JobSphere. Empowering careers worldwide.</p>
      </div>
    </div>
  );
}
