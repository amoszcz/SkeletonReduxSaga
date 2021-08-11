import React, { FC } from 'react';
import { useAppSelector } from '../../../app/hooks';

interface LoadingPanelProps {}

const LoadingPanelComponent: FC<LoadingPanelProps> = () => {
    const visible = useAppSelector((state) => state.loadingPanelState.visible);

    return <>{visible && <>Loading...</>}</>;
};
export const LoadingPanel = LoadingPanelComponent;
