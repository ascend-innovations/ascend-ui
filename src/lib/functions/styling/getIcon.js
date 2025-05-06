import {
	// Images
	AscendLogo,
	AscendSymbol,
	Error404Graphic,

	// Medium Icons
	AdministratorsIcon,
	AscendLogoIcon,
	AscendSymbolIcon,
	GroupsIcon,
	HomeIcon,
	MetricsIcon,
	NewNotificationIcon,
	NotificationsIcon,
	ProfileIcon,
	SubscribersIcon,
	TemplatesIcon,

	// Small Icons
	AlertCircleSmallIcon,
	ArrowLeftSmallIcon,
	ArrowRightSmallIcon,
	ChevronDoubleLeftSmallIcon,
	ChevronDoubleRightSmallIcon,
	CloseSmallIcon,
	CloseSmallWhiteIcon,
	Edit01SmallIcon,
	FileCheck02SmallIcon,
	FilterLinesSmallIcon,
	FlipBackwardSmallIcon,
	PlusSmallIcon,
	SearchSmallIcon,
	SuccessCheckCircleSmallIcon,
	Trash01SmallIcon,
	UserPlus01SmallIcon,
	Users03SmallIcon,
	XCircleSmallIcon,

	// Xtra Small Icons
	ArrowDownExtraSmallIcon,
	ArrowUpExtraSmallIcon,
	CheckExtraSmallIcon,
	NeutralExtraSmallIcon,
} from '../../index.js'

export default function getIcon(iconSize, iconName) {
	const iconDictionary = {
		i: {
			AscendLogo: AscendLogo,
			AscendSymbol: AscendSymbol,
			Error404Graphic: Error404Graphic,
		},
		m: {
			AdministratorsIcon: AdministratorsIcon,
			AscendLogoIcon: AscendLogoIcon,
			AscendSymbolIcon: AscendSymbolIcon,
			GroupsIcon: GroupsIcon,
			HomeIcon: HomeIcon,
			MetricsIcon: MetricsIcon,
			NewNotificationIcon: NewNotificationIcon,
			NotificationsIcon: NotificationsIcon,
			ProfileIcon: ProfileIcon,
			SubscribersIcon: SubscribersIcon,
			TemplatesIcon: TemplatesIcon,
		},
		s: {
			AlertCircleSmallIcon: AlertCircleSmallIcon,
			ArrowLeftSmallIcon: ArrowLeftSmallIcon,
			ArrowRightSmallIcon: ArrowRightSmallIcon,
			ChevronDoubleLeftSmallIcon: ChevronDoubleLeftSmallIcon,
			ChevronDoubleRightSmallIcon: ChevronDoubleRightSmallIcon,
			CloseSmallIcon: CloseSmallIcon,
			CloseSmallWhiteIcon: CloseSmallWhiteIcon,
			Edit01SmallIcon: Edit01SmallIcon,
			FileCheck02SmallIcon: FileCheck02SmallIcon,
			FilterLinesSmallIcon: FilterLinesSmallIcon,
			FlipBackwardSmallIcon: FlipBackwardSmallIcon,
			PlusSmallIcon: PlusSmallIcon,
			SearchSmallIcon: SearchSmallIcon,
			SuccessCheckCircleSmallIcon: SuccessCheckCircleSmallIcon,
			Trash01SmallIcon: Trash01SmallIcon,
			UserPlus01SmallIcon: UserPlus01SmallIcon,
			Users03SmallIcon: Users03SmallIcon,
			XCircleSmallIcon: XCircleSmallIcon,
		},
		xs: {
			ArrowDownExtraSmallIcon: ArrowDownExtraSmallIcon,
			ArrowUpExtraSmallIcon: ArrowUpExtraSmallIcon,
			CheckExtraSmallIcon: CheckExtraSmallIcon,
			NeutralExtraSmallIcon: NeutralExtraSmallIcon,
		},
	}
	try{
		return iconDictionary[iconSize][iconName]
	} catch (e){
		console.warn("Unable to load correct icon")
		return undefined
	}
	
}
