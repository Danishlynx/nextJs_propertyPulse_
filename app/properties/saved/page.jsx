import PropertyCard from '@/PropertyCard';
import connectDB from '@/app/config/database';
import User from '@/app/models/User';
import { getSessionUser } from '@/utils/getSessionUser';

const SavedPropertiesPage = async () => {
  const { userId } = await getSessionUser();

  const { bookmarks } = await User.findById(userId).populate('bookmarks');

  return (
    <section className='px-4 py-6'>
      <div className='container lg:container m-auto px-4 py-6'>
        <h1 className='text-2xl mb-4'>Saved Properties</h1>
        {bookmarks.length === 0 ? (
          <p>No Saved Properties</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols gap-6'>
            {bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
