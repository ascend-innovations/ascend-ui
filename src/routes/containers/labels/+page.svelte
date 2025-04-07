<script>
import {
		FilterContainer,
		Page,
		PageBody,
		CalendarSmallIcon,
		SexSmallIcon,
		RaceSmallIcon,
		Translate01SmallIcon,
		AgeSmallIcon,
		MapPin04SmallIcon,
		Link03SmallIcon,
		CreditCardSearchSmallIcon,
		HandHeartSmallIcon,
		MedicalSquareSmallIcon,
		MedicalCrossSmallIcon,
		MedicalCircleSmallIcon,
		ProfilePlusSmallIcon,
		Edit04SmallIcon,
		UserEditSmallIcon,
		Building08SmallIcon,
		SearchSmallIcon,
		NotificationTextSmallIcon,
		StarEmptySmallIcon,
		AutoSaveIndicator
	} from '$lib/index.js'

	const filters = [
		{ icon: CalendarSmallIcon, label: ['label'], tooltip: 'Tip' },
		{ icon: SexSmallIcon, label: ['longer label'], tooltip: 'Tip1' },
		{ icon: RaceSmallIcon, label: ['item one', 'item two'], tooltip: 'Tip Range' },
		{ icon: Translate01SmallIcon, label: ['why?'], tooltip: 'Tip2' },
		{ icon: AgeSmallIcon, label: ['what?'], tooltip: 'Tip3' },
		{ icon: MapPin04SmallIcon, label: ['how?'], tooltip: 'Tip4' },
		{ icon: Link03SmallIcon, label: ['attached'], tooltip: 'This Tip5' },
		{ icon: CreditCardSearchSmallIcon, label: ['billing'], tooltip: 'Yay Billing' },
		{ icon: HandHeartSmallIcon, label: ['F06.30', 'F06.31', 'F06.32', 'F06.33', 'F06.34', 'F06.4', 'F06.8', 'F07.0', 'F06.0', 'F06.1', 'F06.2', 'F07.89', 'F07.9', 'F09.', 'F20.0', 'F20.1', 'F20.2', 'F20.3', 'F20.5', 'F20.81', 'F20.89', 'F20.9', 'F21.', 'F22.', 'F23.', ' F24.'], tooltip: 'Tip6' },
		{ icon: MedicalSquareSmallIcon, label: ['woof'], tooltip: 'Tip7' },
		{ icon: MedicalCrossSmallIcon, label: ['health'], tooltip: 'Tip8' },
		{ icon: MedicalCircleSmallIcon, label: ['diag 1', 'diag2', 'diag 3', 'diag 4'], tooltip: 'Tip9' },
		{ icon: ProfilePlusSmallIcon, label: ['users'], tooltip: 'Tip10' },
		{ icon: UserEditSmallIcon, label: ['edit?'], tooltip: 'Tip11' },
		{ icon: Edit04SmallIcon, label: ['Pen Squiggle'], tooltip: 'Tip12' },
		{ icon: Building08SmallIcon, label: ['Jail'], tooltip: 'Tip13' },
		{ icon: SearchSmallIcon, label: ['search'], tooltip: 'Search' },
		{ icon: NotificationTextSmallIcon, label: ['notification'], tooltip: 'Tip14' },
		{ icon: StarEmptySmallIcon, label: ['law enforcement'], tooltip: 'Tip15' },
	]
</script>

<Page>
	<PageBody size="full">
		<h1>Filters</h1>
		<div>
			<FilterContainer {filters} />
		</div>
		<div>
			<AutoSaveIndicator saving={true} />
		</div>
	</PageBody>
</Page>
