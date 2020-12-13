import Image from "next/image";

export const AppCard = ({
  title,
  description,
  url,
  previewImagePath,
  repositoryUrl,
}) => (
  <div className="flex flex-col justify-start items-center pt-4 pb-4 lg:items-start lg:flex-row">
    <div className="pb-4 w-full lg:w-5/12 lg:pr-3 lg:pb-0">
      <Image
        src={previewImagePath}
        alt="app preview"
        width={300}
        height={200}
        className="rounded-md"
      />
    </div>
    <div className="flex flex-col h-full justify-between items-start lg:w-7/12">
    <p className="text-gray-700">
      <a href={url} target="_blank" rel="noopener noreferer">
        <span className="text-gray-900 font-bold underline">{title}</span>
      </a>
      : {description}
    </p>

    <a href={repositoryUrl} target="_blank" rel="noopener noreferer">
      source code
    </a>  
    </div>
    
  </div>
);
