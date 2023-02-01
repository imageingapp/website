import {
  PencilIcon,
  ServerIcon,
  ViewListIcon,
  DocumentDuplicateIcon
} from "@heroicons/react/outline";

const features = [
  {
    name: "Huge variety of hosts",
    description: <>You can choose from a huge variety of hosts</>,
    icon: ServerIcon
  },
  {
    name: "No quality loss",
    description: <>Your images will always stay in the same quality</>,
	icon: DocumentDuplicateIcon
  },
  {
    name: "Image editing prior to uploading",
    description: <>You can edit the image before uploading</>,
    icon: PencilIcon
  },
  {
    name: "Upload History",
    description: <>You can see the history of your uploads</>,
    icon: ViewListIcon
  }
];

export default function FeatureGrid() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Features
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Imageing is a modern image sharing app for Android.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
