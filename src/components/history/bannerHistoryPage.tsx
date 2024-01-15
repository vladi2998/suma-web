'use client';
import Image from 'next/image';
import BannerImgHistoryPage from '../../../public/WEBP/banner-history-page.webp';

export default function BannerHistoryPage() {
	return (
		<div className="w-full h-96 hidden md:flex items-start justify-center relative mt-2">
			<Image
				src={BannerImgHistoryPage}
				className=''
				alt={`banner-img-history-page`}
				layout="fill"
			/>
		</div>
	);
}
