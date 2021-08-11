import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { USER_CONFIRMED, USER_REJECTED } from '../sagas/confirm.saga';

interface ConfirmProps {}

const ConfirmComponent: FC<ConfirmProps> = () => {
    const message = 'Czy na pewno?';
    const dispatch = useDispatch();
    const { visible } = useAppSelector((state) => state.confirmState);
    return (
        <>
            {visible && (
                <div
                    style={{
                        position: 'absolute',
                        width: '306px',
                        height: '114px',
                        background: '#fafafa',
                        border: '1px solid black',
                    }}
                >
                    <span>{message}</span>
                    <div>
                        <button
                            onClick={() => {
                                dispatch({ type: USER_CONFIRMED });
                            }}
                        >
                            Tak
                        </button>
                        <button
                            autoFocus={true}
                            onClick={() => {
                                dispatch({ type: USER_REJECTED });
                            }}
                        >
                            Nie
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export const Confirm = ConfirmComponent;
