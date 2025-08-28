import FlexCard from '@/components/cards/FlexCard'

export default function Gridflex() {
    return (
        <div className="px-4 md:px-16 py-10">
            <div>
                <div className="text-3xl">
                    Why Use <span className="text-[var(--primary)] ">GridFlex?</span>
                </div>
                <div className="font-thin">
                    Your all-in-one platform for smarter, faster, and more efficient electricity management.
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <FlexCard
                    icon={'/icons/merge-cells_svgrepo.com.svg'}
                    title={'Unified Control'}
                    content={'Manage vending, metering, data, and network operations from one intuitive dashboard.'}
                />
                <FlexCard
                    icon={'/icons/_ui-clock-check.svg'}
                    title={'Real-Time Insights'}
                    content={'Access up-to-the-minute analytics to make faster, more informed decisions.'}
                />
                <FlexCard
                    icon={'/icons/_ui-settings-01.svg'}
                    title={'Seamless Automation'}
                    content={'Reduce work with intelligent scheduling, remote configuration, and updates.'}
                />
                <FlexCard
                    icon={'/icons/_ui-trend-up-01.svg'}
                    title={'Scalable & Flexible'}
                    content={'Adapt to networks and evolving regulatory requirements without disruption.'}
                />
            </div>

        </div>
    )
}