import connectDB from '@/app/config/database';
import Property from '@/app/models/Property';

export const GET = async (request, { params }) => {
  try {
    connectDB();

    const property = await Property.findById(params.id);

    if (!property) return new Response('Property not found', { status: 404 });

    return new Response(property, {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
