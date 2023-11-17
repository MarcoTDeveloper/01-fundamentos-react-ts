import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';
import { useState } from 'react';
import styles from './Comment.module.css';

interface CommentProps {
    id: string;
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({id, content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        onDeleteComment(id)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false} 
                src="https://github.com/MarcosDevPF.png"
                alt=""
                
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Vitor</strong>
                            <time title="15 de Novembro as 21:45" dateTime="2023-11-15 21:45:30">Cerca de 1h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}