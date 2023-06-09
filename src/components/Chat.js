import { MdOutlineCancel } from 'react-icons/md';

import  Button  from './Button';

import { useStateContext } from '../contexts/ContextProvider';

const chatData = [
    {
        image: '',
        message: 'Roman Joined the Team!',
        desc: 'Congratulate him',
        time: '9:08 AM',
    },
    {
        image: '',
        message: 'New message received',
        desc: 'Salma sent you new message',
        time: '11:56 AM',
    },
    {
        image: '',
        message: 'New Payment received',
        desc: 'Check your earnings',
        time: '4:39 AM',
    },
    {
        image:'',
        message: 'Jolly completed tasks',
        desc: 'Assign her new tasks',
        time: '1:12 AM',
    },
];

const Chat = () => {
    const { currentColor } = useStateContext();

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
                    <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange">
                        5 New
                    </button>
                </div>
                <Button
                    icon={<MdOutlineCancel />}
                    color="rgb(153, 171, 180)"
                    bgHoverColor="light-gray"
                    size="2xl"
                    borderRadius="50%"
                />
            </div>
            <div className="mt-5 ">
                {chatData?.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
                        <div className="relative">
                            <img
                                className="rounded-full h-10 w-10"
                                src={item.image}
                                alt={item.message}
                            />
                            <span
                                style={{ background: item.dotColor }}
                                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                            />
                        </div>
                        <div>
                            <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
                        </div>
                    </div>
                ))}
                <div className="mt-5">
                    <Button
                        color="white"
                        bgColor={currentColor}
                        text="See all messages"
                        borderRadius="10px"
                        width="full"
                    />
                </div>
            </div>
        </>
    );
};

export default Chat;
