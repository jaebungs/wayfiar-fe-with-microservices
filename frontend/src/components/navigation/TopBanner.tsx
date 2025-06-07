import Anchor from '../common/Anchor'

function TopBanner() {
  return (
    <div className="w-full bg-purple-100">
      <div className="container-90-auto flex justify-center items-center py-1 desktop:justify-between">
        <div>
          <Anchor to="/" variant="white" className="text-white anchor-1">Up to 70% OFF | Ends Tonight | Four-Day Flash Sale</Anchor>
        </div>
        <div className="hidden desktop:flex gap-4">
          <Anchor to="/" variant="white" className="text-white anchor-1">Our App</Anchor>
          <Anchor to="/" variant="white" className="text-white anchor-1">Financing</Anchor>
          <Anchor to="/" variant="white" className="text-white anchor-1">Professional</Anchor>
          <Anchor to="/" variant="white" className="text-white anchor-1">FREE Shopping Over $50*</Anchor>
        </div>
      </div>
    </div>
  )
}

export default TopBanner
