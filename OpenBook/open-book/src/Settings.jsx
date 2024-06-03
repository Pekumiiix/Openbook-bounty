import AccountSettings from "./Components/accountsettings";
import DisplaySettings from "./Components/displaySettings";
import HotKeys from "./Components/hotkeys";
import NetworkSettings from "./Components/networkSettings";
import NotificationSettings from "./Components/notificationSettings";
import PreferenceSettings from "./Components/preferencesettings";

function Settings() {
  return (
    <>
      <div className="settings">
        <AccountSettings />

        <NetworkSettings />

        <DisplaySettings />

        <NotificationSettings />

        <PreferenceSettings />

        <HotKeys />
      </div>
    </>
  );
}

export default Settings;
