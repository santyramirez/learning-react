import './App.css'

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/kikobeats" alt="kikobeats avatar" />
                <div>
                    <strong>Kiko Beats</strong>
                    <span>@kikobeats</span>
                </div>
            </header>

            <aside>
                <button>
                    Follow
                </button>
            </aside>
        </article>
    )
}