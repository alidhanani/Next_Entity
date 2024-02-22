import React, { useEffect, useState } from "react";
//@ts-ignore
import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import AddEntityModal from "@/components/AddEntityModal";
import UpdateEntityModal from "@/components/UpdateEntityModal";
import useUserStore from "@/service/store";
import CompanyTable from "@/components/CompanyTable";
import ContactTable from "@/components/ContactTable";
import { Tab } from "@headlessui/react";
import { GET_ENTITIES } from "@/graphql/queries";
import { EntityDataType } from "@/service/entity.interface";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_ENTITIES, {
    client: client
  });

  const dataList = useUserStore((state: any) => state.setDataList);
  const allDataList = useUserStore((state: any) => state.setAllData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const didUpdate = useUserStore((state: any) => state.didAdd);

  useEffect(() => {
    if (data) {
      allDataList(data.getEntities);
    }
    console.log(data);

    if (didUpdate) {
      refetch(); // Trigger a refetch when didUpdate changes
    }
  }, [didUpdate]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModalUpdate = (data: EntityDataType) => {
    dataList(data);
    setIsUpdateModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const companies = data.getEntities.filter(
    (entity: EntityDataType) => entity.__typename === "Company"
  );
  const contacts = data.getEntities.filter(
    (entity: EntityDataType) => entity.__typename === "Contact"
  );

  console.log(data.getEntities);

  const tabs = ["Company", "Contact"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Entities</h1>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mb-8"
        onClick={openModal}
      >
        Add Entity
      </button>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((data) => (
            <Tab
              key={data} // Use data as the key, assuming it uniquely identifies each tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {data}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {" "}
            <CompanyTable
              companies={companies}
              openModalUpdate={openModalUpdate}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ContactTable
              contacts={contacts}
              openModalUpdate={openModalUpdate}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <AddEntityModal isOpen={isModalOpen} onClose={closeModal} />
      <UpdateEntityModal
        isOpen={isUpdateModalOpen}
        onClose={closeModalUpdate}
      />
    </div>
  );
};

export default Home;
