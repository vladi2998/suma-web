import WorkingSection from '@/components/home/workingSection';
import TitleWorkingSection from '@/components/working/titleSection';

export default function WorkingPage() {
	return (
		<>
			<TitleWorkingSection />
			<WorkingSection showTitle={false}/>
		</>
	);
}
