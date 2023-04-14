import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListings";
import getCurrentUser from "../actions/getCurrentUser";
import { EmptyState, ClientOnly } from "../components";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you no properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
