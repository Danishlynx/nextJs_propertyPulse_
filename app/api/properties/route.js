import connectDB from '@/app/config/database';
import Property from '@/app/models/Property';

export const GET = async () => {
  try {
    connectDB();

    const properties = await Property.find({});

    return new Response(properties, {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
