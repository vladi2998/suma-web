import HeaderComponent from '@/components/header';
import AddingSection from '@/components/home/addingSection';
import BannerBackground from '@/components/home/bannerBackground';
import HistorySection from '@/components/home/historySection';
import UmaChartSection from '@/components/home/umaChartSection';
import PagesLayout from '@/components/pagesLayout';
import MyRouteSection from '@/components/home/myRouteSection';
import WorkingSection from '@/components/home/workingSection';

export default function Page() {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={0} />
			<MyRouteSection />
			<div className="w-full px-4 my-2">
				<HistorySection />
			</div>
			<BannerBackground />
			<div className="w-full px-4">
				<AddingSection />
			</div>
			<WorkingSection showTitle={true} />
			<UmaChartSection />
		</PagesLayout>
	);
}
