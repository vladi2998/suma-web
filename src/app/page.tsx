'use client';
import HeaderComponent from '@/components/header';
import AddingSection from '@/components/home/addingSection';
import BannerBackground from '@/components/home/bannerBackground';
import HistorySection from '@/components/home/historySection';
import UmaChartSection from '@/components/home/umaChartSection';
import PagesLayout from '@/components/pagesLayout';

export default function Page() {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={0} />
			<BannerBackground />
			<div className="w-full px-4">
				<HistorySection />
			</div>
			<div className="w-full px-4">
				<AddingSection />
			</div>
			<UmaChartSection />
		</PagesLayout>
	);
}
