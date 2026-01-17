const ScrollerSkeleton = () => {
  return (
    <div className="flex flex-nowrap overflow-x-auto w-full gap-4 py-4 my-5">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="animate-pulse ">
          {/* Image Skeleton */}
          <div className="min-w-37.5 h-56.25 rounded-md bg-muted" />

          {/* Text Skeleton */}
          <div className="my-2 mt-6 space-y-2">
            <div className="h-4 w-32 bg-muted rounded" />
            <div className="h-3 w-24 bg-muted/70 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollerSkeleton;
