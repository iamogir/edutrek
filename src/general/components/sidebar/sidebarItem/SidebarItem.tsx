import React from 'react';

interface Props {
    item: string
}

const SidebarItem = ({item}:Props) => {
    return (
        <div>
            {item}
        </div>
    );
};

export default SidebarItem;