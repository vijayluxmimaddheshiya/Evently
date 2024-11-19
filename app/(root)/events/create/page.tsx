import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

export default async function CreateEvent() {
  const { userId } = await auth();

  if (!userId) {
    // Handle the case where userId is null (e.g., redirect to login)
    throw new Error("User is not authenticated");
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
}

