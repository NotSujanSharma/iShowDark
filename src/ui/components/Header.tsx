import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

import LogoImage from "./Images/logo.png";
import { LinkWithChannel } from "../atoms/LinkWithChannel";


export function Header({ channel }: { channel: string }) {

	return (
		<header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm`}>			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
					  {/* Logo with gradient */}
					  <div className="flex-shrink-0">
						  <span className="text-4xl font-serif font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
							{/* <Logo /> */}
							<LinkWithChannel href="/" >
							<img src={LogoImage.src} alt="Logo" className="h-12 inline-block" />
							</LinkWithChannel>
						  </span>
					  </div>
			
					  {/* Desktop Navigation */}
						<Nav channel={channel} />

					  
					</div>
				  </div>
		</header>
	);
}
