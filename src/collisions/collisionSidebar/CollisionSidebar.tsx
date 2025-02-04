import { ICollision, ISatellite } from "../../utils/loadData";
import { CollisionList } from "./CollisionList";
import { CollisionDetails } from "./CollisionDetails";

type CollisionSidebarProps = {
  selectedCollision: ICollision | null;
  onClickCollision: (collision: ICollision | null) => void;
  collisionData: ICollision[];
  satelliteLookup: Record<string, ISatellite>;
};

export function CollisionSidebar({
  selectedCollision,
  collisionData,
  onClickCollision,
  satelliteLookup,
}: CollisionSidebarProps) {
  if (!selectedCollision) {
    return (
      <CollisionList
        collisionData={collisionData}
        onClickCollision={onClickCollision}
        selectedCollision={selectedCollision}
        satelliteLookup={satelliteLookup}
      />
    );
  }

  return (
    <CollisionDetails
      selectedCollision={selectedCollision}
      onClearCollision={() => onClickCollision(null)}
      satelliteLookup={satelliteLookup}
    />
  );
}
